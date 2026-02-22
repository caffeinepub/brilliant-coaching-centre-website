import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Nat8 "mo:core/Nat8";

actor {
  include MixinStorage();

  type Image = {
    id : Text;
    blob : Storage.ExternalBlob;
    title : Text;
    description : Text;
    galleryId : Text;
  };

  type Gallery = {
    id : Text;
    name : Text;
    description : Text;
  };

  type Review = {
    fullName : Text;
    classYear : Text;
    subjects : ?Text;
    review : Text;
    rating : ?Nat8; // 1-5 rating scale; using Nat8 for simplicity.
    timestamp : Int;
    approved : Bool; // For moderation purposes.
  };

  let images = Map.empty<Text, Image>();
  let galleries = Map.empty<Text, Gallery>();
  let reviews = Map.empty<Text, Review>(); // Store reviews using fullName as key (assuming unique).

  // Gallery Management.
  public shared ({ caller }) func createGallery(id : Text, name : Text, description : Text) : async Bool {
    let gallery : Gallery = {
      id;
      name;
      description;
    };
    galleries.add(id, gallery);
    true;
  };

  public query ({ caller }) func getGallery(id : Text) : async ?Gallery {
    galleries.get(id);
  };

  public query ({ caller }) func getAllGalleries() : async [Gallery] {
    galleries.values().toArray();
  };

  public shared ({ caller }) func deleteGallery(id : Text) : async Bool {
    if (galleries.containsKey(id)) {
      galleries.remove(id);
      true;
    } else {
      false;
    };
  };

  // Image Management.
  public shared ({ caller }) func addImage(id : Text, blob : Storage.ExternalBlob, title : Text, description : Text, galleryId : Text) : async Bool {
    switch (galleries.get(galleryId)) {
      case (?_) {
        let image : Image = {
          id;
          blob;
          title;
          description;
          galleryId;
        };
        images.add(id, image);
        true;
      };
      case (null) { false };
    };
  };

  public query ({ caller }) func getImage(id : Text) : async ?Image {
    images.get(id);
  };

  public query ({ caller }) func getImagesByGallery(galleryId : Text) : async [Image] {
    images.values().filter(func(image) { image.galleryId == galleryId }).toArray();
  };

  public shared ({ caller }) func deleteImage(id : Text) : async Bool {
    if (images.containsKey(id)) {
      images.remove(id);
      true;
    } else {
      false;
    };
  };

  // Review Management.
  public shared ({ caller }) func submitReview(fullName : Text, classYear : Text, subjects : ?Text, review : Text, rating : ?Nat8) : async () {
    let newReview : Review = {
      fullName;
      classYear;
      subjects;
      review;
      rating;
      timestamp = Time.now();
      approved = false; // Default to unapproved for moderation.
    };
    reviews.add(fullName, newReview); // NOTE: Using fullName as key. May need to change in future.
  };

  public query ({ caller }) func getAllReviews() : async [Review] {
    reviews.values().toArray();
  };

  public shared ({ caller }) func approveReview(fullName : Text) : async Bool {
    switch (reviews.get(fullName)) {
      case (null) { false };
      case (?review) {
        let updatedReview : Review = { review with approved = true };
        reviews.add(fullName, updatedReview);
        true;
      };
    };
  };

  public query ({ caller }) func getApprovedReviews() : async [Review] {
    reviews.values().filter(func(review) { review.approved }).toArray();
  };
};
