const PaymentInformation = () => (
  <div>
    <div data-cy="fee-list-body">
      <div className="fee-list-body__text">
        Overdue fees and replacement costs that were created before 27/10/2020
        can still be paid on this page.
      </div>
      <div className="fee-list-body__payment-info-link">
        <a
          href="https://unsplash.com/photos/NEJcmvLFcws"
          rel="noreferrer"
          className="link-tag"
        >
          See our fees and replacement costs
        </a>
      </div>
    </div>
    <div className="fee-list-body__payment-button">
      <a
        data-cy="fee-payment-button"
        href="https://google.com/"
        rel="noreferrer"
        className="btn-primary btn-outline btn-small arrow__hover--right-small hide-linkstyle"
      >
        Go to payment page
        <img
          className="btn-icon"
          src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 2.25C20.9182 2.25 21.6712 2.95711 21.7442 3.85647L21.75 4V20C21.75 20.9182 21.0429 21.6712 20.1435 21.7442L20 21.75H9C8.08183 21.75 7.32881 21.0429 7.2558 20.1435L7.25 20V16C7.25 15.5858 7.58579 15.25 8 15.25C8.3797 15.25 8.69349 15.5322 8.74315 15.8982L8.75 16V20C8.75 20.1183 8.83223 20.2175 8.94268 20.2434L9 20.25H20C20.1183 20.25 20.2175 20.1678 20.2434 20.0573L20.25 20V4C20.25 3.88165 20.1678 3.78251 20.0573 3.7566L20 3.75H9C8.88165 3.75 8.78251 3.83223 8.7566 3.94268L8.75 4V8C8.75 8.41421 8.41421 8.75 8 8.75C7.6203 8.75 7.30651 8.46785 7.25685 8.10177L7.25 8V4C7.25 3.08183 7.95711 2.32881 8.85647 2.2558L9 2.25H20ZM13.4535 8.57412L13.5303 8.64124L16.3588 11.4697C16.6272 11.7382 16.6496 12.1596 16.4259 12.4535L16.3588 12.5303L13.5303 15.3588C13.2374 15.6517 12.7626 15.6517 12.4697 15.3588C12.2012 15.0903 12.1788 14.6689 12.4025 14.3749L12.4697 14.2981L14.017 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.6203 2.53215 11.3065 2.89823 11.2568L3 11.25H14.017L12.4697 9.7019C12.2012 9.43342 12.1788 9.01202 12.4025 8.71805L12.4697 8.64124C12.7382 8.37276 13.1596 8.35038 13.4535 8.57412Z' fill='black'/%3e %3c/svg%3e"
          alt=""
        />
      </a>
    </div>
  </div>
);

export default PaymentInformation;
