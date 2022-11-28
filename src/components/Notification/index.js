import { Container, List, NavLink } from 'reactstrap';
import "./Notification.scss";

const data =[
    
]

const Notification = () => {
    return (
        <Container className='notification' fluid>
            <div>
            <h3 className='border-bottom'>THÔNG BÁO</h3>
                <List>
                    <li>                        
                        <NavLink href="#">
                            351/TB-HĐTDVC TB niêm yết điểm sát hạch tuyển dụng trường CĐYT 7-2021
                        </NavLink>
                    </li>

                    <li>                        
                        <NavLink href="#">
                            299/CĐYT-TB: Danh sách đủ điều kiện xét tuyển viên chức CĐYT Đắk Lắk
                            (Vòng 2)
                        </NavLink>
                    </li>

                    <li>                        
                        <NavLink href="#">
                            284/TB-CĐYT Thông báo về việc điều chỉnh thời gian tổ chức xét tuyển
                            viên chức Trường CĐYT Đắk Lắk 2020
                        </NavLink>
                    </li>

                    <li>                        
                        <NavLink href="#">
                            Đề cương ôn tập tuyển dụng viên chức Trường CĐYT Đắk Lắk (6/2021)
                        </NavLink>
                    </li>

                    <li>                        
                        <NavLink href="#">Đề cương ôn tập tuyển dụng viên chức Trường CĐYT Đắk Lắk</NavLink>
                    </li>

                    <li>                        
                        <NavLink href="#">
                            Thông báo V/v điều chỉnh phụ lục kế hoạch tuyển dụng và gia hạn nộp hồ
                            sơ dự tuyển cho vị trí tuyển dụng được điều chỉnh
                        </NavLink>
                    </li>

                    <li>                        
                        <NavLink href="#">Thông báo tuyển dụng viên chức Trường Cao đẳng tế Đắk Lắk</NavLink>
                    </li>
                </List>
            </div>
        </Container>
    );
};

export default Notification;
