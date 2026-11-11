export function BookingPreview() {
  return (
    <div className="window">
      <div className="windowbar">
        <i />
        <i />
        <i />
        <span style={{ margin: 'auto' }}>randevu.defteri</span>
      </div>
      <div className="windowbody">
        <div className="shop">
          Her şey vaktinde.<small>BERBER RANDEVU DENEYİMİ</small>
        </div>
        <div className="booking">
          <div className="barbericon">✂</div>
          <div>
            <div className="fake-line" />
            <div className="fake-line" style={{ width: '55%' }} />
            <div className="slots">
              <span>10.00</span>
              <span>11.30</span>
              <span>14.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
