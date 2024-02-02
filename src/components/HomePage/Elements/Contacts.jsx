import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <section className="content-contacts">
      <div className="content-contacts_blog_info">
        <h5 className="content-blog_heading">Контакты</h5>
        <p className="content-blog_sheet_contacts">Адрес</p>
        <p className="content-blog_sheet">
          Санкт-Петербург, ул. Большая Конюшенная, 19
        </p>
        <p className="content-blog_sheet_contacts">Телефон</p>
        <p className="content-blog_sheet">+7 (923) 888-90-60</p>
        <p className="content-blog_sheet_contacts">E-mail</p>
        <p className="content-blog_sheet">info@maroon.ru</p>
        <div className="content-blog_contacts_web">
          <Link to="https://www.facebook.com/">
            <svg
              className="content-blog__web"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
            >
              <path
                d="M6.28571 7H11L10.4762 9H6.28571V18H4.19048V9H0V7H4.19048V5.128C4.19048 3.345 4.38533 2.698 4.74991 2.046C5.10715 1.40181 5.65904 0.875009 6.3339 0.534C7.01695 0.186 7.69476 0 9.56267 0C10.1095 0 10.5893 0.0500001 11 0.15V2H9.56267C8.17562 2 7.75343 2.078 7.32286 2.298C7.00438 2.46 6.76762 2.686 6.59791 2.99C6.36743 3.401 6.28571 3.804 6.28571 5.128V7Z"
                fill="#122947"
              />
            </svg>
          </Link>
          <Link to="https://www.instagram.com/">
            <svg
              className="content-blog__web"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75ZM10 2C7.526 2 7.122 2.007 5.971 2.058C5.187 2.095 4.661 2.2 4.173 2.39C3.739 2.558 3.426 2.759 3.093 3.093C2.78001 3.3954 2.53935 3.76458 2.389 4.173C2.199 4.663 2.094 5.188 2.058 5.971C2.006 7.075 2 7.461 2 10C2 12.474 2.007 12.878 2.058 14.029C2.095 14.812 2.2 15.339 2.389 15.826C2.559 16.261 2.759 16.574 3.091 16.906C3.428 17.242 3.741 17.443 4.171 17.609C4.665 17.8 5.191 17.906 5.971 17.942C7.075 17.994 7.461 18 10 18C12.474 18 12.878 17.993 14.029 17.942C14.811 17.905 15.338 17.8 15.826 17.611C16.259 17.442 16.574 17.241 16.906 16.909C17.243 16.572 17.444 16.259 17.61 15.829C17.8 15.336 17.906 14.809 17.942 14.029C17.994 12.925 18 12.539 18 10C18 7.526 17.993 7.122 17.942 5.971C17.905 5.189 17.8 4.661 17.61 4.173C17.4593 3.765 17.2191 3.39596 16.907 3.093C16.6047 2.77985 16.2355 2.53917 15.827 2.389C15.337 2.199 14.811 2.094 14.029 2.058C12.925 2.006 12.539 2 10 2ZM10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0Z"
                fill="#122947"
              />
            </svg>
          </Link>
          <Link to="https://www.twitter.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
            >
              <path
                d="M13.8641 2.04374C13.1063 2.04361 12.3787 2.34819 11.838 2.89193C11.2972 3.43567 10.9865 4.17511 10.9726 4.95114L10.9447 6.55955C10.9431 6.6459 10.9236 6.73093 10.8877 6.80905C10.8517 6.88717 10.8 6.95662 10.736 7.01284C10.6719 7.06906 10.597 7.11078 10.5162 7.13527C10.4353 7.15975 10.3503 7.16645 10.2667 7.15491L8.71031 6.93842C6.66235 6.65248 4.70013 5.68641 2.81769 4.08004C2.22145 7.46026 3.38601 9.8019 6.19074 11.6084L7.9326 12.7297C8.01536 12.783 8.08412 12.8562 8.13286 12.943C8.18159 13.0298 8.20882 13.1275 8.21217 13.2275C8.21551 13.3276 8.19487 13.427 8.15204 13.517C8.10922 13.607 8.04551 13.6848 7.9665 13.7438L6.37918 14.9315C7.3234 14.9917 8.21975 14.9488 8.96356 14.7977C13.6677 13.8357 16.7955 10.2104 16.7955 4.23016C16.7955 3.74202 15.7864 2.04374 13.8641 2.04374ZM8.97851 4.91335C8.99592 3.92895 9.29646 2.97169 9.84252 2.16141C10.3886 1.35113 11.1559 0.723842 12.0484 0.358092C12.9409 -0.00765845 13.9188 -0.0956204 14.8599 0.105219C15.801 0.306059 16.6633 0.786775 17.3389 1.48718C18.0478 1.48207 18.651 1.66589 20 0.828497C19.666 2.50329 19.5015 3.23039 18.7896 4.23016C18.7896 12.0343 14.1064 15.8291 9.3544 16.8003C6.09602 17.4661 1.35799 16.3724 0 14.9202C0.691959 14.8651 3.50366 14.5556 5.12887 13.3373C3.75393 12.4091 -1.71893 9.11054 1.87746 0.24232C3.56548 2.26126 5.27743 3.63581 7.01231 4.36496C8.16691 4.85003 8.45007 4.83982 8.97951 4.91437L8.97851 4.91335Z"
                fill="#122947"
              />
            </svg>
          </Link>
        </div>
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae41141d21569dba2aa832f6908ca58c765de1c19756a1989bee611145248c9a5&amp;source=constructor"
        frameborder="0"
      ></iframe>
    </section>
  );
};

export default Contacts;
