import React from "react";
import { Link } from "react-router-dom";
import logoAccount from "../../images/account.svg";

function AccountMenu({themeAccount}) {
    return (
        <Link to="/profile" className={`account__container ${themeAccount}`}>
            Аккаунт
            <div className="account__logo-container">
                <img
                    src={logoAccount}
                    alt="Логотип"
                    className="account__logo"
                />
            </div>
        </Link>
    );
}

export default AccountMenu;