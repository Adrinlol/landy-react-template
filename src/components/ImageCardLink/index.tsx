import { Card, Space } from "antd";

import { SvgIcon } from "../../common/SvgIcon";

interface Props {
    image: string;
    link: string,
    subtitle: string;
}

const ImageCardLink = ({ image, link, subtitle }: Props) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
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