import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
type Props = {};

export default function How({}: Props) {
  return (
    <div className="content">
      <Container>
        <Row
          style={{ textAlign: "center" }}
          className="first-row d-flex justify-content-md-center justify-content-sm-center align-items-center"
        >
          <p style={{ width: "80%", textAlign: "right", lineHeight: "33px" }}>
            شارك في <a href="#"> #تحدي_الكارني </a> خلص كريدي الحانوت على إنسان
            محتاج!
            <br />
            أجي نعاونوهم بهاد الطريقة الساهلة:
            <br />
            1. سير عند مول الحانوت
            <br />
            2. سولو شكون ممخلصش الكريدي ديالو
            <br />
            3. خلص عليه جزء من الكريدي أو كلو، حسب لي قدرتي عليه
            <br />
            4. نشر هاد الحملة معا خمسة الناس كتعرفهم
            <br />
            5. ماتسناش! كليكي على البوطونة، باش الرقم يبقا يكبر، والناس يعرفو
            راه باقي الخير فالدنيا، ويتشجعو حتى هوما يشاركو عتق الناس من كريدي
            الحانوت، وفرج الكربة ديالهم، والله يتقبل ويثبت الأجر.
          </p>
          <Link style={{ color: "#FF4C29" }} to="/">
            شارك معنا
          </Link>
        </Row>
      </Container>
    </div>
  );
}
