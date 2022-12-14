import { Container } from 'reactstrap';

const RunningText = ({ separator = '' }) => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return (
        <Container fluid style={{}}>
            <Container className="d-flex p-2 align-items-center border-bottom">
                <div style={{ width: '200px' }}>
                    Ngày
                    {date}
                    {separator}
                    {month}
                    {separator}
                    {year}
                </div>
                <marquee style={{ color: 'var(--primary)' }}>
                    Trường Cao Đẳng Y tế Đắk Lắk - 32 Y Ngông, phường Tân Tiến, thành phố Buôn Ma
                    Thuột, tỉnh Đắk Lắk.
                </marquee>
            </Container>
        </Container>
    );
};

export default RunningText;
