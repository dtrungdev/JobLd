"use client";
import classNames from "classnames/bind";
import style from "../styles/savedJobs.module.scss";
import Header from "../components/app.header";
import Selection from "../components/selection";
import Image from "next/image";
import EmptyBox from "../../../public/empty-box.png";
import Footer from "../components/app.footer";

const cl = classNames.bind(style);

function SavedJobs() {
    return (
        <>
            <Header />
            <div className={cl("wrapper")}>
                <div className={cl("switch-page")}>
                    <div className={cl("container", "switcher")}>
                        <div className={cl("action")}>Đã lưu</div>
                        <div className={cl("action")}>Đã ứng tuyển</div>
                    </div>
                </div>
                <div className={cl("content", "container")}>
                    <div
                        className={cl(
                            "d-flex",
                            "align-items-md-center",
                            "justify-content-between",
                            "flex-column",
                            "flex-md-row"
                        )}
                        style={{ margin: "32px 0" }}
                    >
                        <h2 className={cl("title")}>Việc làm đã lưu (0)</h2>
                        <div className={cl("arrange")}>
                            <span style={{ marginRight: "8px" }}>
                                Sắp xếp theo
                            </span>
                            <Selection
                                listOption={[{ id: 12, name: "ok" }]}
                                className={cl("selection")}
                            />
                        </div>
                    </div>
                    <div className={cl("saved-jobs")}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                fontSize: "1.6rem",
                                fontWeight: "500",
                            }}
                        >
                            <Image
                                src={EmptyBox}
                                alt="empty job box"
                                height={200}
                                width={200}
                                style={{ opacity: 0.5 }}
                            />
                            Bạn có 0 Việc làm đã lưu
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SavedJobs;
