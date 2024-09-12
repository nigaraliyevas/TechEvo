import "./PasswordReset.scss";
import "../../../public/assets/common/base.scss";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const PasswordReset = () => {
  return (
    <div className="password-reset-container">
      <div className="container">
        <div className="password-reset-box">
          <form method="post" onSubmit={ev => ev.preventDefault()}>
            <h2>Yeni şifrə</h2>
            <p>Şifrəniz minimum 8 simvoldan ibarət olmalıdır.</p>
            <Input labelText="Şifrə" type="password" placeholder="Şifrənizi daxil edin" />
            <Input labelText="Şifrəni təkrarla" type="password" placeholder="Şifrənizi daxil edin" />
            <Button buttonText={"Yadda saxla"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
