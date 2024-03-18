import {Link} from "react-router-dom";
import { Card, Space } from "antd";

import { SvgIcon } from "../../common/SvgIcon";

interface Props {
    image: string;
    link: string,
    title: string;
    subtitle: string;
}

const ImageCardLink = ({ image, link, title, subtitle }: Props) => {
    return (
        <a href={link} target="_blank">
            <Card>
                <span>
                    <Space>
                    <SvgIcon src={image} width="25px" height="25px" />
                    {subtitle}
                    </Space>
                </span>
            </Card>
        </a>
        )
}

export default ImageCardLink;