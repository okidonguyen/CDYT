export const items = [
    {
        altText: '',
        caption: '',
        key: 1,
        src: require('~/assets/images/banner/Photo-06.jpg'),
    },
    {
        altText: '',
        caption: '',
        key: 1,
        src: require('~/assets/images/banner/Photo-01.jpg'),
    },
    {
        altText: '',
        caption: '',
        key: 2,
        src: require('~/assets/images/banner/Photo-02.jpg'),
    },
    {
        altText: '',
        caption: '',
        key: 3,
        src: require('~/assets/images/banner/Photo-03.jpg'),
    },
    {
        altText: '',
        caption: '',
        key: 4,
        src: require('~/assets/images/banner/Photo-04.jpg'),
    },
    {
        altText: '',
        caption: '',
        key: 5,
        src: require('~/assets/images/banner/Photo-05.jpg'),
    },
];

export const footerItems = [
    {
        altText: '',
        caption: '',
        key: 1,
        src: require('~/assets/images/hoatdong/1.jpg'),
    },
    {
        altText: '',
        caption: '',
        key: 2,
        src: require('~/assets/images/hoatdong/2.jpg'),
    },
    {
        altText: '',
        caption: '',
        key: 3,
        src: require('~/assets/images/hoatdong/3.jpg'),
    },
    {
        altText: '',
        caption: '',
        key: 4,
        src: require('~/assets/images/hoatdong/4.jpg'),
    },
    {
        altText: '',
        caption: '',
        key: 5,
        src: require('~/assets/images/hoatdong/5.jpg'),
    },
];

export const trangchuMenu = [
    {
        name: 'Trang chủ',
        link: '/',
    },
    {
        name: 'Giới thiệu',
        submenu: [
            {
                name: 'Giới thiệu chung',
                link: '/gioithieu/gioi-thieu-chung',
            },
            {
                name: 'Chức năng nhiệm vụ',
                link: '/gioithieu/chuc-nang-nhiem-vu',
            },
            {
                name: 'Cơ cấu tổ chức',
                link: '/gioithieu/co-cau-to-chuc',
            },
            {
                name: 'Công khai chất lượng',
                link: '/gioithieu/cong-khai-chat-luong',
            },
        ],
    },
    {
        name: 'Phòng Khoa',
        submenu: [
            {
                name: 'Phòng Tổ chức hành chính',
                link: '/phongkhoa/phong-to-chuc-hanh-chinh',
            },
            {
                name: 'Phòng đào tạo',
                link: '/phongkhoa/phong-dao-tao',
            },
            {
                name: 'Phòng tài chính kế toán',
                link: '/phongkhoa/phong-tai-chinh-ke-toan',
            },
            {
                name: 'Phòng Công tác HSSV',
                link: '/phongkhoa/phong-cong-tac-hoc-sinh-sinh-vien',
            },
            {
                name: 'Phòng Khảo thí và KĐCL',
                link: '/phongkhoa/phong-khao-thi-va-kiem-dinh-chat-luong',
            },
            {
                name: 'Khoa cơ bản',
                link: '/phongkhoa/khoa-khoa-hoc-co-ban',
            },
            {
                name: 'Khoa Y',
                link: '/phongkhoa/khoa-y',
            },
            {
                name: 'KHOA ĐIỀU DƯỠNG - KTYH',
                link: '/phongkhoa/khoa-dieu-duong-ktyh',
            },
            {
                name: 'KHOA DƯỢC',
                link: '/phongkhoa/khoa-duoc',
            },
        ],
    },
    {
        name: 'Hoạt động nội bộ',
        submenu: [
            {
                name: 'Hoạt động Đảng',
                link: '/tintuc/hoatdongdang',
            },
            {
                name: 'Hoạt động chuyên môn',
                link: '/tintuc/hoatdongchuyenmon',
            },
            {
                name: 'Đoàn thanh niên',
                link: '/tintuc/doanthanhnien',
            },
            {
                name: 'Hoạt động Công đoàn',
                link: '/tintuc/congdoan',
            },
            {
                name: 'Thi và Tuyển sinh',
                link: '/tintuc/thivatuyensinh',
            },
        ],
    },
    {
        name: 'Đào tạo',
        submenu: [
            {
                name: 'Chương trình đào tạo',
                link: '/daotao/chuongtrinhdaotao',
            },
            {
                name: 'Lịch giảng viên',
                link: '/dangnhap',
            },
            {
                name: 'Lịch thi hết môn',
                link: '/dangnhap',
            },
            {
                name: 'Văn bản đào tạo',
                link: '/dangnhap',
            },
        ],
    },
    {
        name: 'Hướng nghiệp',
        link: '/huongnghiep',
    },
    {
        name: 'Tuyển sinh',
        submenu: [
            {
                name: 'Thông báo tuyển sinh',
                link: '/thongbao',
            },

            {
                name: 'Đăng ký tuyển sinh trực tuyến',
                link: '/tuyensinh',
            },
            {
                name: 'Kết quả tuyển sinh',
                link: '/tuyensinh',
            },
        ],
    },

    {
        name: 'Sinh viên',
        submenu: [
            {
                name: 'Tra cứu điểm',
                link: '/dangnhap',
            },
            {
                name: 'Tra cứu Lịch học',
                link: '/dangnhap',
            },
            {
                name: 'Tài liệu học tập',
                link: '/dangnhap',
            },
            {
                name: 'Thư viện bài giảng',
                link: '/dangnhap',
            },
        ],
    },
    {
        name: 'Hỏi đáp',
        link: '/hoidap',
    },
    {
        name: 'Liên hệ',
        link: '/lienhe',
    },
];

export const SlideshowSettings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 10000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    height: '550px',
    fade: true,
    cssEase: 'linear',
};

export const CauhoiThuonggap = {};
