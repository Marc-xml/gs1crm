import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/gs1.png';
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';
import { selectLangDirection } from '@/redux/translate/selectors';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();
  const langDirection = useSelector(selectLangDirection)

  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img
          src={logo}
          alt="GS1 CRM ERP"
          style={{ margin: '0 auto 40px', display: 'block' }}
          height={63}
          // width={63}
        />
        <div className="space40"></div>

        <div className="space20"></div>
        <ul className="list-checked" style={{paddingRight:0}}>
          {/* <li className={`list-checked-item ${langDirection === "rtl" ? "list-checked-item-right" : "list-checked-item-left"}`}>
            <Space direction="vertical">
              <Text strong></Text>

            </Space>
          </li> */}
{/* 
          <li className={`list-checked-item ${langDirection === "rtl" ? "list-checked-item-right" : "list-checked-item-left"}`}>
     
          </li> */}
        </ul>
        <Divider />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* <img
            src={logo1}
            alt="Logo1"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
            height={48}
            width={48}
          />
          <img
            src={logo2}
            alt="Logo2"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
            height={48}
            width={48}
          />
          <img
            src={logo3}
            alt="Logo3"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
            height={48}
            width={48}
          />
          <img
            src={logo4}
            alt="Logo4"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
            height={48}
            width={48}
          /> */}
        </div>
      </div>
    </Content>
  );
}
