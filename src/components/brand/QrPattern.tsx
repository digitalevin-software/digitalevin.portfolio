/** 9x9 sabit desenli QR görünümü (dekoratif; gerçek bir kod değildir). */
export function QrPattern() {
  const cells = []
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      // Üç köşede dolu konum kareleri, gerisi sabit bir desen
      const finder = (r < 3 && c < 3) || (r < 3 && c > 5) || (r > 5 && c < 3)
      const on = finder || (r * 7 + c * 13 + r * c) % 5 < 2
      cells.push(<span key={`${r}-${c}`} className={on ? 'bg-foreground' : 'bg-transparent'} />)
    }
  }
  return <div className="grid aspect-square grid-cols-9 gap-[1.5px]">{cells}</div>
}
