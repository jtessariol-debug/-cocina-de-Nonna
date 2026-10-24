import React from 'react';
import {CreditCard, Truck, Snowflake} from 'lucide-react';
import {payment, delivery, storage} from '../config/commerce';
import '../styles/commerce.css';

export default function CommerceInfo() {
  return <section className="section commerce-info reveal" aria-label="Información para tu pedido">
    <article><CreditCard size={23} strokeWidth={1.3} aria-hidden="true"/><h2>Formas de pago</h2><ul>{payment.methods.map(method => <li key={method}>{method}</li>)}</ul><p>{payment.note}</p>
      {payment.accounts.map((account, index) => <dl className="payment-account" key={index}>{[['Banco',account.bank],['Titular',account.holder],['Cuenta',account.account],['Tipo',account.type]].filter(([,value])=>value).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>)}
    </article>
    <article><Truck size={23} strokeWidth={1.3} aria-hidden="true"/><h2>Entrega y pedidos</h2><p>{delivery.coordination}</p><p>{delivery.availability}</p><p>{delivery.advanceOrders}</p>{delivery.coverage && <p>{delivery.coverage}</p>}{delivery.fees && <p>{delivery.fees}</p>}{delivery.schedule && <p>{delivery.schedule}</p>}</article>
    <article><Snowflake size={23} strokeWidth={1.3} aria-hidden="true"/><h2>Conservación</h2><ul>{storage.instructions.map(instruction => <li key={instruction}>{instruction}</li>)}</ul>{storage.shelfLife && <p>{storage.shelfLife}</p>}</article>
  </section>;
}
