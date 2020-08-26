import React, { useState } from "react";

const Order = ({ order }) => {
  const { province, hold, support, convoy, to } = order;

  if (hold) {
    return <Hold province={province} />;
  } else if (support && to) {
    return <Support province={province} support={support} to={to} />;
  } else if (convoy && to) {
    return <Convoy province={province} convoy={convoy} to={to} />;
  } else if (to) {
    return <Move province={province} to={to} />;
  } else {
    throw Error("No match for move");
  }
};

const Hold = ({ province }) => {
  return <div>{province} hold</div>;
};

const Support = ({ province, support, to }) => {
  return (
    <div>
      {province} support {support} to {to}
    </div>
  );
};

const Move = ({ province, to }) => {
  return (
    <div>
      {province} move to {to}
    </div>
  );
};

const Convoy = ({ province, convoy, to }) => {
  return (
    <div>
      {province} convoy {convoy} to {to}
    </div>
  );
};

const OrdersTab = ({ orders, ...props }) => {
  return (
    <div>
      {orders.map((order, i) => (
        <Order order={order} key={order.province} />
      ))}
    </div>
  );
};

export default OrdersTab;
