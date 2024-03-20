import React from "react";
import Button from "./Button";
import Footer from "./Footer";

export default function Container() {
  return (
    <div className="container">
      <h1 className="container__header">Buttons</h1>
      <div className="container__row">
        <div className="container__row__item">
          <p>{"<Button />"}</p>
          <Button>Default</Button>
        </div>
        <div className="container__row__item">
          <p className="hover">{"&:hover, &:focus"}</p>
          <Button hover="hover">Default</Button>
        </div>
      </div>
      <div className="container__row">
        <div className="container__row__item">
          <p>{'<Button variant="outline"/>'}</p>
          <Button variant="outline" color="primary">
            Default
          </Button>
        </div>
        <div className="container__row__item">
          <p className="hover">{"&:hover, &:focus"}</p>
          <Button variant="outline" color="primary" hover="hover">
            Default
          </Button>
        </div>
      </div>
      <div className="container__row">
        <div className="container__row__item">
          <p>{'<Button variant="text"/>'}</p>
          <Button variant="text" color="primary">
            Default
          </Button>
        </div>
        <div className="container__row__item">
          <p className="hover">{"&:hover, &:focus"}</p>
          <Button variant="text" color="primary" hover="hover">
            Default
          </Button>
        </div>
      </div>
      <div className="container__row">
        <div className="container__row__item">
          <p>{"<Button disableShadow/>"}</p>
          <Button color="primary" disableShadow>
            Default
          </Button>
        </div>
      </div>
      <div className="container__row">
        <div className="container__row__item">
          <p>{"<Button disable/>"}</p>
          <Button disabled>Disable</Button>
        </div>
        <div className="container__row__item">
          <p>{'<Button variant="text" disable/>'}</p>
          <Button variant="text" disabled>
            Disable
          </Button>
        </div>
      </div>
      <div className="container__row">
        <div className="container__row__item">
          <p>{'<Button startIcon="local_grocery_store"/>'}</p>
          <Button color="primary" startIcon="local_grocery_store">
            Default
          </Button>
        </div>
        <div className="container__row__item">
          <p>{'<Button endIcon="local_grocery_store"/>'}</p>
          <Button color="primary" endIcon="local_grocery_store">
            Default
          </Button>
        </div>
      </div>
      <div className="container__row">
        <div className="container__row__item">
          <p>{'<Button size="sm"/>'}</p>
          <Button color="primary" size="sm">
            Default
          </Button>
        </div>
        <div className="container__row__item">
          <p>{'<Button size="md"/>'}</p>
          <Button color="primary" size="md">
            Default
          </Button>
        </div>
        <div className="container__row__item">
          <p>{'<Button size="lg"/>'}</p>
          <Button color="primary" size="lg">
            Default
          </Button>
        </div>
      </div>
      <div className="container__row">
        <div className="container__row__item">
          <p>{'<Button color="default"/>'}</p>
          <Button color="default">Default</Button>
        </div>
        <div className="container__row__item">
          <p>{'<Button color="default"/>'}</p>
          <Button color="primary">Primary</Button>
        </div>
        <div className="container__row__item">
          <p>{'<Button color="default"/>'}</p>
          <Button color="secondary">Secondary</Button>
        </div>
        <div className="container__row__item">
          <p>{'<Button color="default"/>'}</p>
          <Button color="danger">Danger</Button>
        </div>
      </div>
      <div className="container__row">
        <div className="container__row__item">
          <p className="hover">{"&:hover, &:focus"}</p>
          <Button color="default" hover="hover">
            Default
          </Button>
        </div>
        <div className="container__row__item">
          <Button color="primary" hover="hover">
            Primary
          </Button>
        </div>
        <div className="container__row__item">
          <Button color="secondary" hover="hover">
            Secondary
          </Button>
        </div>
        <div className="container__row__item">
          <Button color="danger" hover="hover">
            Danger
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
