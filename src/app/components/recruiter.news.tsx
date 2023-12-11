import classNames from "classnames/bind";
import styles from "../styles/recruiterNews.module.scss";

import { Button, Table } from "react-bootstrap";
import Selection from "../components/selection";
import { useState } from "react";

const cl = classNames.bind(styles);

function RecruitmentNew() {
    const listGender = [
        { id: 1, name: "nam" },
        { id: 2, name: "nữ" },
    ];
    const [isTurnOn, setIsTurnOn] = useState(false);
    return (
        <div className={cl("container-mini")}>
            <div className={cl("manage-menu")}>
                <div className={cl("d-flex")} style={{ width: "100%" }}>
                    <input
                        type="text"
                        placeholder="Tìm kiếm tin tuyển dụng theo tiêu đề hoặc mã tin (Nhấn Enter để tìm kiếm)"
                        className={cl("input-group")}
                    />
                    <Button className={cl("btn-search")}>
                        <i className={cl("fa-solid fa-search")}></i>
                    </Button>
                </div>
            </div>
            <div className={cl("manage-table")}>
                <Table bordered size="lg">
                    <thead>
                        <tr>
                            <th>Tin tuyển dụng</th>
                            <th>
                                <div
                                    className={cl(
                                        "d-flex",
                                        "justify-content-center"
                                    )}
                                >
                                    <i
                                        className={cl("fa-solid fa-gear")}
                                        style={{ fontSize: "1.8rem" }}
                                    ></i>
                                </div>
                            </th>
                            <th>Xem CV ứng tuyển</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={cl("field-data")}>
                            <td>
                                <div>
                                    <p className={cl("title-data")}>
                                        <span className={cl("status")}>
                                            Đang hiển thị
                                        </span>
                                        Tuyển dụng nhân viên thu nhập cao đvs
                                        sđvs vsdsvd dsdsvvds sdvvdsdvs dvsdvs
                                    </p>
                                    <p className={cl("campaign-created")}>
                                        Chiến dịch: Tuyển dụng nhân viên thu
                                        nhập cao
                                    </p>
                                </div>
                            </td>
                            <td>
                                <div
                                    className={cl(
                                        "d-flex",
                                        "flex-column",
                                        "align-items-center",
                                        "gap-4"
                                    )}
                                >
                                    <i
                                        className={cl(
                                            "fa-solid fa-pen",
                                            "icon-action"
                                        )}
                                        title="Chỉnh sửa"
                                    ></i>
                                    <i
                                        className={cl(
                                            "fa-solid fa-pause",
                                            "icon-action"
                                        )}
                                        title="Tạm dừng"
                                    ></i>
                                    <i
                                        className={cl(
                                            "fa-solid fa-trash",
                                            "icon-action"
                                        )}
                                        title="Xóa"
                                    ></i>
                                </div>
                            </td>
                            <td>
                                <span className={cl("highlight")}>
                                    Chưa có CV nào
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default RecruitmentNew;
