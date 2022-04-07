import "./loading.css";
type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="loading">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
