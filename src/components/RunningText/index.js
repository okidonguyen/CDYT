import { Container } from 'reactstrap';

const RunningText = ({ separator = '' }) => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return (
        <Container fluid>
            <Container className="d-flex align-items-center border-bottom pt-2 pb-2">
                <marquee style={{ color: 'var(--primary)' }}>
                    Trường Cao Đẳng Y tế Đắk Lắk - 32 Y Ngông, phường Tân Tiến, thành phố Buôn Ma
                    Thuột, tỉnh Đắk Lắk.
                </marquee>
                <div
                    style={{
                        width: '200px',
                        background: `url(${require('~/assets/images/bg_title.png')}) no-repeat top right`,
                        textAlign: 'center',
                    }}
                >
                    Ngày
                    {date}
                    {separator}
                    {month}
                    {separator}
                    {year}
                </div>
            </Container>
        </Container>
    );
};

export default RunningText;
