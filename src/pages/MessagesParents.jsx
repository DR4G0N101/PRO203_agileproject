import React, { useState } from "react";

export default function MessagesForesatte({ activePage, setActivePage }) {
    const [showNewMessage, setShowNewMessage] = useState(false);

    const messages = [
        {
            name: "Merete",
            group: "Avd. Rompetroll",
            text: "Helt i orden",
            status: "new",
        },
        {
            name: "Jane Doe",
            group: "Avd. Askeladden",
            text: "Takk for beskjed",
            status: "new",
        },
        {
            name: "Hans Hansen",
            group: "Avd. Rompetroll",
            text: "Godt å vite.",
            status: "read",
        },
        {
            name: "John Doe",
            group: "Avd. Rompetroll",
            text: "Ok.",
            status: "read",
        },
        {
            name: "Kari Normann",
            group: "Avd. Askeladden",
            text: "Supert det",
            status: "read",
        },
    ];

    return (
        <div style={styles.container}>
            {/* Header */}
            <div style={styles.header}>
                {showNewMessage ? (
                    <span
                        style={styles.backButton}
                        onClick={() => setShowNewMessage(false)}
                    >
                        ←
                    </span>
                ) : (
                    <span style={styles.menuIcon}>☰</span>
                )}

                <h2 style={styles.title}>MELDINGER</h2>

                {!showNewMessage && (
                    <span
                        style={styles.plus}
                        onClick={() => setShowNewMessage(true)}
                    >
                        ＋
                    </span>
                )}
            </div>

            {!showNewMessage ? (
                <>
                    {/* Search */}
                    <div style={styles.searchBox}>
                        <span>🔍</span>
                        <input placeholder="Søk ..." style={styles.searchInput} />
                    </div>

                    {/* Message list */}
                    <div style={styles.list}>
                        {messages.map((m, index) => (
                            <div key={index} style={styles.messageCard}>
                                <div style={styles.nameRow}>
                                    <span style={styles.name}>{m.name}</span>
                                    {m.status === "new" ? (
                                        <span style={styles.new}>new</span>
                                    ) : (
                                        <span style={styles.sent}>✓✓</span>
                                    )}
                                </div>
                                <div style={styles.group}>{m.group}</div>
                                <div
                                    style={
                                        m.status === "new"
                                            ? styles.textNew
                                            : styles.text
                                    }
                                >
                                    {m.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    {/* New message */}
                    <h3 style={styles.newTitle}>Ny beskjed</h3>
                    <p style={styles.newDescription}>
                        Send en ny melding til en avdeling.
                    </p>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Velg avdeling</label>
                        <input value="Rompetroll" disabled style={styles.input} />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Beskjed</label>
                        <textarea
                            placeholder="Hva har du på hjertet?"
                            style={styles.textArea}
                        />
                    </div>

                    <button style={styles.sendButton}>Send inn</button>
                </>
            )}

            {/* Bottom nav */}
            <div style={styles.bottomNav}>
                <span onClick={() => setActivePage("home")}>👥</span>
                <span onClick={() => setActivePage("messages")}>💬</span>
                <span onClick={() => setActivePage("overview")}>📋</span>
                <span style={{ color: "#002B7F" }}>⚙️</span>
            </div>
        </div>
    );
}

/* ================= STYLES ================= */

const styles = {
    container: {
        padding: "16px",
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

    backButton: {
        fontSize: "24px",
        cursor: "pointer",
        color: "#000",
    },

    menuIcon: {
        fontSize: "24px",
        color: "#000",
    },

    title: {
        fontSize: "20px",
        fontWeight: "700",
        flex: 1,
        color: "#000",
    },

    plus: {
        fontSize: "24px",
        cursor: "pointer",
        color: "#000",
    },

    searchBox: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        padding: "8px",
        borderRadius: "10px",
        marginTop: "10px",
    },

    searchInput: {
        marginLeft: "8px",
        border: "none",
        outline: "none",
        width: "100%",
        background: "transparent",
        color: "#000",
    },

    list: {
        marginTop: "14px",
    },

    messageCard: {
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "8px",
    },

    nameRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    name: {
        fontWeight: "600",
        color: "#000",
    },

    group: {
        fontSize: "13px",
        color: "#000",
    },

    text: {
        fontSize: "13px",
        color: "#000",
    },

    textNew: {
        fontSize: "15px",
        fontWeight: "600",
        color: "#000",
    },

    new: {
        color: "#FF6F4A",
        fontSize: "12px",
    },

    sent: {
        color: "#FF6F4A",
    },

    newTitle: {
        fontSize: "18px",
        fontWeight: "700",
        marginTop: "10px",
        color: "#000",
    },

    newDescription: {
        fontSize: "14px",
        marginBottom: "14px",
        color: "#000",
    },

    formGroup: {
        marginBottom: "14px",
    },

    label: {
        fontSize: "13px",
        marginBottom: "4px",
        display: "block",
        color: "#000",
    },

    input: {
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "white",
        color: "#000",
    },

    textArea: {
        width: "100%",
        height: "110px",
        padding: "10px",
        borderRadius: "10px",
        border: "none",
        resize: "none",
        backgroundColor: "white",
        color: "#000",
    },

    sendButton: {
        marginTop: "10px",
        padding: "10px 24px",
        borderRadius: "20px",
        border: "none",
        backgroundColor: "#FF6F4A",
        color: "white",
        fontWeight: "600",
        cursor: "pointer",
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
        fontSize: "24px",
    },
};
