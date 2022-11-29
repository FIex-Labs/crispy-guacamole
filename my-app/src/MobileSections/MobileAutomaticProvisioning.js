import "../Styles/ProductDetailsMobile.css";

export default function MobileAutomaticProvisioning() {
  return (
    <section className="Info_Page_Mobile">
      <h1 className="Section_Header_Text_Mobile">
        {" "}
        Automatic resource provisioning{" "}
      </h1>
      <p className="Section_Header_Description_Mobile">
        {" "}
        Confused about all the configuration options when hosting a database in
        the cloud? Based on the database details, as well as your preferences,
        we come up with the a specific cloud configuration tailored to your
        needs.
      </p>
      <div className="SectionHolder_Mobile">
        <div className="hidden Section_Mobile">
          <h1 className="Section_Text_Mobile">Optimized at every level</h1>{" "}
          <p className="paragraph_Mobile">
            Flex Labs will periodically reconfigure your database's settings in
            order to get you the best performance at a reasonable price.
          </p>
        </div>
      </div>
    </section>
  );
}
