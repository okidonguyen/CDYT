import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';

const Breadcrumbs = ({ items }) => {
    return (
        <Container className="d-none d-lg-block p-2 ">
            <Breadcrumb listTag="div" className="p-0 m-0">
                {items.length > 0
                    ? items.map((item, index) => (
                          <BreadcrumbItem key={index} href={item.href} tag="a">
                              {item.name}
                          </BreadcrumbItem>
                      ))
                    : {}}
            </Breadcrumb>
        </Container>
    );
};

export default Breadcrumbs;
