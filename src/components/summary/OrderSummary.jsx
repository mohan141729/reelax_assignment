import { ChevronUp, Circle, CircleDot, Tag, WalletCards, Zap } from 'lucide-react'
import { useState } from 'react'
import Button from '../common/Button'

const coupons = [
  {
    id: 'welcome20',
    code: 'WELCOME20',
    description: '20% off on your first month',
  },
  {
    id: 'annual50',
    code: 'ANNUAL50',
    description: '50% off on annual plans',
  },
]

export default function OrderSummary() {
  const [couponCode, setCouponCode] = useState('')
  const [selectedCoupon, setSelectedCoupon] = useState('welcome20')

  return (
    <aside className="summary-column">
      <section className="panel summary-panel">
        <h2>Order Summary</h2>

        <div className="summary-card">
          <div className="summary-top-row">
            <p className="summary-price">
              ₹4,999<span>/month</span>
            </p>
            <div className="plan-copy">
              <span>Selected Plan</span>
              <strong>Startup</strong>
            </div>
          </div>
          <p className="summary-note">Includes 5,000 credits/mo.</p>
        </div>

        <Button variant="outline" className="upgrade-plan">
          <Zap />
          Upgrade to Growth Plan
        </Button>
      </section>

      <section className="panel payment-panel">
        <div className="wallet-card">
          <WalletCards className="wallet-icon" />
          <div>
            <p className="wallet-title">Wallet Balance</p>
            <p className="wallet-amount">₹500.00 available</p>
          </div>
          <Button variant="small">Apply</Button>
        </div>

        <div className="coupon-card">
          <div className="coupon-header">
            <Tag />
            <span>Apply Coupon</span>
            <ChevronUp />
          </div>
          <div className="coupon-input-row">
            <input
              value={couponCode}
              placeholder="Enter coupon code"
              onChange={(event) => setCouponCode(event.target.value)}
            />
            <Button variant="small">Apply</Button>
          </div>

          <div className="coupon-list">
            {coupons.map((coupon) => (
              <label
                key={coupon.id}
                className={`coupon-option ${selectedCoupon === coupon.id ? 'selected' : ''}`}
              >
                <div>
                  <strong>{coupon.code}</strong>
                  <span>{coupon.description}</span>
                </div>
                <input
                  type="radio"
                  name="coupon"
                  value={coupon.id}
                  checked={selectedCoupon === coupon.id}
                  onChange={() => setSelectedCoupon(coupon.id)}
                />
                {selectedCoupon === coupon.id ? <CircleDot /> : <Circle />}
              </label>
            ))}
          </div>
        </div>

        <div className="price-breakdown">
          <div className="price-row">
            <span>Subtotal</span>
            <strong>₹14,999.00</strong>
          </div>
          <div className="price-row">
            <span>Tax (18% GST)</span>
            <strong>₹1,079.64</strong>
          </div>
          <div className="divider" />
          <div className="price-row total-row">
            <span>Total due today</span>
            <strong>16,078.64</strong>
          </div>
          <Button variant="primary" className="full-width">
            Proceed to Payment
          </Button>
        </div>
      </section>
    </aside>
  )
}
