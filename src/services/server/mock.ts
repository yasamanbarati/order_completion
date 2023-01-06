import { WalletIcon } from 'components/icons/wallet_icon'
import { BankingPortalIcon } from 'components/icons/banking_portal_icon'
import { CashIcon } from 'components/icons/cash_icon'
import { AddresssType, PaymentMethodType } from 'scenes/_slice/type'

export const addresss: AddresssType[] = [
  {
    id: '1',
    text: 'دفتر',
    address: 'بلوار کشاورز، نبش 16 آذر واحد 209',
    mapId: 'a',
  },
  {
    id: '1',
    text: 'دریافت حضوری',
    address: 'بلوار کشاورز، نبش 16 آذر واحد پیتزا سیب کارگر شمالی',
    mapId: 'b',
  },
]
export const payment_method: PaymentMethodType[] = [
  {
    name: 'کیف پول',
    icon: WalletIcon,
  },
  {
    name: 'درگاه بانکی',
    icon: BankingPortalIcon,
  },
  {
    name: 'نقدی',
    icon: CashIcon,
  },
]
