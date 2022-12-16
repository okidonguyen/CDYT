function HeadTittle({ title, color = 'var(--primary)' }) {
    return (
        <div
            className="border-bottom"
            style={{
                display: 'flex',
                alignItems: 'center',
                minHeight: '52px',
                background: `url(${require('./bg_title.png')}) no-repeat bottom right`,
                borderTop: `4px solid var(--primary)`,
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
