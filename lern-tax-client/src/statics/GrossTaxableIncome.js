import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const GrossTaxableIncome = () => {
  return (
    <>
      <h1>What Is Income?</h1>

      <ReactBootStrap.ListGroup>
        <ReactBootStrap.ListGroup.Item variant="danger">
          <b>INCLUDED IN GROSS INCOME</b>
        </ReactBootStrap.ListGroup.Item>
      </ReactBootStrap.ListGroup>
      <ReactBootStrap.CardGroup>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Compensation From Wages (W-2) Employee
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              If you work for an employer, you will receive a W-2 that provides
              a synopsis of the previous year's wages. Box 1 of your W-2 are the
              wages you earned during the year and is included in your gross
              income. Moreover, Box 2 of your W-2 shows how much money was
              withheld from your paychecks.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Net Income From Self Employment
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              If you own your own business or derive income without an employer,
              or considered an independent contractor, you will have to create a
              1099-MISC. Box 7 derives how much money you made througout the
              year. Self-employment income is treated much differently than
              regular W-2 income in that the self-employed taxpayer must pay
              both side of Social Security taxes.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Rental Income</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              If you own property and rent it out, the income you receive as
              compensation is considered passive yet taxable income. Passive
              income is treated much differently than regular income. Taxpayers
              who have rental income have to file a Schedule E with their
              return.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup>
      <ReactBootStrap.CardGroup>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Interest Income
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              If you have a savings account or own other types of bonds, you
              will receive a 1099-INT for your interest income. Amounts received
              in excess of $10 are taxable.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Dividends</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              If you own corporate stock who have dividends in a taxable
              account, you will receive a Form-DIV. Depending on how long you
              held the stock, the dividends may be considered qualified and are
              taxed differently than ordinary dividends.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Royalties</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Royalties are payments made to the owner of an asset who lends for
              the right to ongoing use of that asset. Taxpayers with royalties
              also need to file a Schedule E.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup>
      <ReactBootStrap.CardGroup>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Pensions</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Any distrubtions taken from a pension account is taxable. Pension
              distrubtions are given through 1099-R.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Capital Gains</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              When you buy an asset and sell it at a higher price, that is
              considered capital gains. Capital gains are usually derived from
              the buying and selling of stock and the holding period can change
              the way in which they are taxed. Other common capital gain assets
              are houses and cars.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Distributions From Retirement Accounts
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Any distrubtions taken from a retirement account is taxable.
              Retirement account distrubtions, like pension distrubtions, are
              given through 1099-R.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup>
      <ReactBootStrap.ListGroup>
        <ReactBootStrap.ListGroup.Item variant="danger">
          <b> SPEC EXCLUDED IN GROSS INCOME</b>
        </ReactBootStrap.ListGroup.Item>
      </ReactBootStrap.ListGroup>
      <ReactBootStrap.CardGroup>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Life Insurance Payments
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Generally, the beneficiary of a life insurance policy receives
              payments tax free.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Gifts</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              When one receives a gift from another, the receiver will receive
              the gift tax free (barring special situations). The giver may also
              be subject to certain tax implications.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Interest On Municipal Bonds
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Interest payments received by a municipal bond is not federally
              taxable. However, it could possibly be taxed by the state to which
              the bond belongs.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup>
      <ReactBootStrap.CardGroup>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Scholarships and Fellowships
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              So long as scholarships and fellowships are used for qualifying
              educational expenses, they are not taxable.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Federal Tax Refunds
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              That money you get back from the IRS in the form of a refund? Not
              taxable.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Disaster Relief Payments
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Section 139 of IRS code
              <i>
                permits employers to provide employees with qualified disaster
                relief payments’ to assist with personal needs arising from a
                qualified disaster under the Code.
              </i>{" "}
              This will be a big topic during the COVID-19 pandemic.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup>
      {/* <ReactBootStrap.CardGroup>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Pensions</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Capital Gains</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
        <ReactBootStrap.Card>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>
              Distributions From Retirement Accounts
            </ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </ReactBootStrap.Card.Text>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </ReactBootStrap.CardGroup> */}
    </>
  );
};

export default GrossTaxableIncome;
