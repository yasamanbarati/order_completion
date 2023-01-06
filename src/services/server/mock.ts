import { WalletIcon } from 'components/icons/wallet_icon'
import { BankingPortalIcon } from 'components/icons/banking_portal_icon'
import { CashIcon } from 'components/icons/cash_icon'
import { AddressType, PaymentMethodType } from 'scenes/_slice/type'

export const address: AddressType[] = [
  {
    id: '1',
    text: 'دفتر',
    address: 'بلوار کشاورز، نبش 16 آذر واحد 209',
    mapId: 'a',
  },
  {
    id: '2',
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
