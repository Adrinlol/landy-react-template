import { withTranslation } from "react-i18next";
import { Container } from "./styles";
import { Label } from "../TextArea/styles";
import { UploadProps } from "../types";
import { Upload } from "antd";

const { Dragger } = Upload;

const UploadInput = ({ name, multiple, onChange, t, children, ...rest }: UploadProps) => (
  <Container>
      <Label htmlFor={name}>{t(name)}</Label>
    <Dragger
      id={name}
      multiple={multiple}
      beforeUpload={()=> false /** restrict auto upload. **/}
      onChange={onChange}
    >
    Upload a file...
    </Dragger>
  </Container>
);

export default withTranslation()(UploadInput);
