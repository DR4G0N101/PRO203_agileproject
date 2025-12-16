import React from "react";

export default function Overview({ activePage, setActivePage }) {
    const children = [
        { name: "Lea", img: "https://i.pravatar.cc/80?img=1" },
        { name: "Kari", img: "https://i.pravatar.cc/80?img=2" },
        { name: "Hans", img: "https://i.pravatar.cc/80?img=3" },
        { name: "Ola", img: "https://i.pravatar.cc/80?img=4" },
        { name: "Muhammed", img: "https://i.pravatar.cc/80?img=5" },
    ];

    return (
        <div style={styles.container}>
            {/* Header */}
            <div style={styles.header}>
                <div style={styles.menuIcon}>☰</div>
                <h2 style={styles.title}>OVERSIKT</h2>
            </div>

            <p style={styles.subTitle}>Rompetroll</p>

            {/* Search */}
            <div style={styles.searchBox}>
                <span>🔍</span>
                <input
                    placeholder="Søk ..."
                    style={styles.searchInput}
                />
            </div>

            {/* Children list */}
            <div style={{ marginTop: "20px" }}>
                {children.map((child, index) => (
                    <div key={index} style={styles.childCard}>
                        <img src={child.img} style={styles.childImg} />
                        <span style={styles.childName}>{child.name}</span>
                        <span style={styles.childMenu}>⋮</span>
                    </div>
                ))}
            </div>

            {/* Bottom nav */}
            <div style={styles.bottomNav}>
                <span
                    style={{
                        ...styles.navItem,
                        color: activePage === "home" ? "#002B7F" : "#000",
                    }}
                    onClick={() => setActivePage("home")}
                >
                    👥
                </span>

                <span
                    style={{
                        ...styles.navItem,
                        color: activePage === "messages" ? "#002B7F" : "#000",
                    }}
                    onClick={() => setActivePage("messages")}
                >
                    💬
                </span>

                <span
                    style={{
                        ...styles.navItem,
                        color: activePage === "overview" ? "#002B7F" : "#000",
                    }}
                    onClick={() => setActivePage("overview")}
                >
                    📋
                </span>

                <span style={styles.navItem}>⚙️</span>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        backgroundColor: "#F5F5F5",
        height: "100vh",
        paddingBottom: "60px",
        boxSizing: "border-box",
        overflow: "hidden",
    },

    header: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },

    menuIcon: {
        fontSize: "26px",
        cursor: "pointer",
        color: "#000",
    },

    title: {
        fontSize: "24px",
        fontWeight: "700",
        margin: 0,
        color: "#000", // ✅ FIX
    },

    subTitle: {
        marginTop: "-4px",
        fontWeight: 500,
        color: "#000", // ✅ FIX
    },

    searchBox: {
        background: "white",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        marginTop: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },

    searchInput: {
        border: "none",
        outline: "none",
        fontSize: "16px",
        width: "100%",
        marginLeft: "10px",
        backgroundColor: "transparent", // ✅ FIX
        color: "#000",
    },

    childCard: {
        background: "white",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        marginBottom: "15px",
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
    },

    childImg: {
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        objectFit: "cover",
        marginRight: "15px",
    },

    childName: {
        fontSize: "18px",
        fontWeight: "600",
        flex: 1,
        color: "#000", // ✅ FIX – DETTE VAR HOVEDPROBLEMET
    },

    childMenu: {
        fontSize: "22px",
        cursor: "pointer",
        color: "#FF6F4A",
    },

    bottomNav: {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "60px",
        backgroundColor: "white",
        borderTop: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: "26px",
    },

    navItem: {
        cursor: "pointer",
    },
};
