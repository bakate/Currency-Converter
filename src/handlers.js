import { convert } from './lib';
import { formatCurrency } from './utils';
import { fromInput, fromSelect, toSelect, toEl } from './elements';

export async function handleInput() {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
