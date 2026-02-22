import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Nat8 "mo:core/Nat8";

actor {
  include MixinStorage();

  type Student = {
    id : Text;
    name : Text;
    className : Text;
    enrollmentDate : Int;
  };

  type TestResult = {
    studentId : Text;
    subject : Text;
    testDate : Int;
    score : Nat;
    maxScore : Nat;
  };

  type AttendanceRecord = {
    studentId : Text;
    date : Int;
    present : Bool;
    notes : ?Text;
  };

  // Placeholder for future student dashboard data structures.
  let students = Map.empty<Text, Student>();
  let testResults = Map.empty<Text, TestResult>();
  let attendanceRecords = Map.empty<Text, AttendanceRecord>();

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
    rating : ?Nat8;
    timestamp : Int;
    approved : Bool;
  };

  let images = Map.empty<Text, Image>();
  let galleries = Map.empty<Text, Gallery>();
  let reviews = Map.empty<Text, Review>();

  // Gallery Management
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

  // Image Management
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
      approved = false;
    };
    reviews.add(fullName, newReview);
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

  // Placeholder CRUD functions for future student dashboard functionality.
  public shared ({ caller }) func createStudent(id : Text, name : Text, className : Text, enrollmentDate : Int) : async () {
    /* Future implementation */
  };

  public query ({ caller }) func getStudent(id : Text) : async ?Student {
    /* Future implementation */
    null;
  };

  public shared ({ caller }) func addTestResult(studentId : Text, subject : Text, testDate : Int, score : Nat, maxScore : Nat) : async () {
    /* Future implementation */
  };

  public query ({ caller }) func getStudentTestResults(studentId : Text) : async [TestResult] {
    /* Future implementation */
    [];
  };

  public shared ({ caller }) func recordAttendance(studentId : Text, date : Int, present : Bool, notes : ?Text) : async () {
    /* Future implementation */
  };

  public query ({ caller }) func getStudentAttendance(studentId : Text) : async [AttendanceRecord] {
    /* Future implementation */
    [];
  };
};
