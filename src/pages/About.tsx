import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
type Props = {};

export default function About({}: Props) {
  return (
    <div className="">
      <Container>
        <Row
          style={{ textAlign: "center" }}
          className="first-row d-flex justify-content-md-center justify-content-sm-center align-items-center"
        >
          <p style={{ width: "80%" }}>
            الناس فأزمة ديال بصح والكريدي ديال مول الحانوت ولا تقيل عليها. شارك
            في حملة <a href="#"> #تحدي_الكارني </a> في شهر رمضان عتق الناس من
            كريدي الحانوت، وفرّج الكربة ديالهم، والله يتقبل ويثبت الأجر.
          </p>
          <Link style={{ color: "#FF4C29" }} to="/how">
            كيفية المشاركة
          </Link>
        </Row>
      </Container>
    </div>
  );
}
