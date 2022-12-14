function HeadTittle({ title, color = 'var(--primary)' }) {
    return (
        <div
            className="border-bottom"
            style={{
                height: '52px',
                background: `url(${require('./bg_title.png')}) no-repeat top right`,
                borderTop: `4px solid var(--primary)`,
                lineHeight: '52px',
                color: color,
                fontWeight: 600,
                fontSize: '1.4rem',
                textTransform: 'uppercase',
            }}
        >
            {title}
        </div>
    );
}

export default HeadTittle;
