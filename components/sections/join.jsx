import Article from "../article";
import Body from "../typography/body";
import Form from "../form";

export default function Join() {
  return (
    <div className="p-5 py-24 md:p-16 flex flex-col lg:flex-row md:pb-44" id="join">
      <div className="lg:w-3/5">
        <Article
          label="JOIN OUR TEAM"
          title="Powered by you. Join our awesome colony of contributors."
          content="NiranjanUx is built and maintained by hundreds of penguin and non-penguin open source contributors around the globe, as well as our own wonderful dedicated team of developers. Fill out the form to join the colony!"
        >
          <Body>
            Our mission is to ensure that computers are accessible to everyone, even
            penguins.
          </Body>
        </Article>
      </div>
      <div className="md:flex-grow" />
      <div className="flex items-center justify-center py-10 md:p-10">
        <Form />
      </div>
    </div>
  );
}
