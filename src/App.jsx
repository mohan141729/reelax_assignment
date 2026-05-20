import BillingForm from './components/billing/BillingForm'
import Header from './components/layout/Header'
import OrderSummary from './components/summary/OrderSummary'

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-layout">
        <BillingForm />
        <OrderSummary />
      </main>
    </div>
  )
}
