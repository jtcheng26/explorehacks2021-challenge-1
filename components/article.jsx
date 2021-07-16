import Body from "./typography/body";
import Heading from "./typography/heading";
import Label from "./typography/label";

export default function Article({ label, title, content }) {
  return (
    <div className="sm:p-4">
      <div className="pb-1">
        <Label>{label}</Label>
      </div>
      <div className="pb-7">
        <Heading>{title}</Heading>
      </div>
      <Body>{content}</Body>
    </div>
  );
}
