import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
} from 'react-share';
import { Container } from 'reactstrap';

const SociaShare = ({ link }) => {
    return (
        <Container
            className="d-flex p-2 justify-content-between"
            style={{
                fontSize: '1.2rem',
            }}
        >
            <div>
                Cỡ chữ:{' '}
                <a href="#">
                    <i className="bi bi-plus-circle-dotted"></i>
                </a>{' '}
                <a href="#">
                    <i className="bi bi-dash-circle-dotted"></i>
                </a>
            </div>
            <div>
                <EmailShareButton url={link}>
                    <EmailIcon size={32} round={false}></EmailIcon>
                </EmailShareButton>
                <FacebookShareButton url={link}>
                    <FacebookIcon size={32} round={false}></FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton url={link}>
                    <TwitterIcon size={32} round={false}></TwitterIcon>
                </TwitterShareButton>
            </div>
        </Container>
    );
};

export default SociaShare;
