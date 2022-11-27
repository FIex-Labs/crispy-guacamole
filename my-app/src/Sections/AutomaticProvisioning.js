import "../Styles/ProductDetails.css";

export default function AutomaticProvisioning() {
  return (
    <section className="Info_Page">
      <h1 className="Section_Header_Text"> Automatic resource provisioning </h1>
      <p className="Section_Header_Description">
        {" "}
        Confused about all the configuration options when hosting a database in
        the cloud? Based on the database details, as well as your preferences,
        we come up with the a specific cloud configuration tailored to your
        needs.
      </p>
      <div className="SectionHolder">
        <div className="hidden Section">
          <h1 className="Section_Text">Optimized at every level</h1>{" "}
          <p className="paragraph">
            Flex Labs will periodically reconfigure your database's settings in
            order to get you the best performance at a reasonable price.
          </p>
        </div>
      </div>
    </section>
  );
}
