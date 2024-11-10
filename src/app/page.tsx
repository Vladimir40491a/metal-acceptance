import Link from 'next/link';
import { Table, Column } from '@/app/components/table';
import { Map } from '@/app/components/map';
import { Flex } from '@/app/components/flex';
import { getAmountWithCurrency, formatPhoneNumber } from '@/app/utils';
import price from '@/database/price.json';
import contactInfo from '@/database/contact-info.json';
import { ContactInfo, MetalDto, MetalRow } from '@/app/types';
import { LocationIcon } from '@/app/components/icons/location';
import { OfficeHoursIcon } from '@/app/components/icons/office-hours';
import { PhoneIcon } from '@/app/components/icons/phone';

/** Колонки таблицы металлов. */
const columns: Column[] = [
  {
    label: 'Вид металла',
    name: 'type',
  },
  {
    label: 'Наличные (цена за 1 кг.)',
    name: 'cashPayment',
  },
]

export default async function Home() {
  const { address, coordinates, opening, phone } = contactInfo as ContactInfo;

  const items: MetalRow[] = (price as unknown as MetalDto[] ?? []).map(({ cashPayment, type }) => ({
    cashPayment: Array.isArray(cashPayment) ? `${getAmountWithCurrency(cashPayment[0])} - ${getAmountWithCurrency(cashPayment[1])}` : getAmountWithCurrency(cashPayment),
    type,
  }))

  return (
    <div className="max-w-4xl m-auto">
      <header className="relative bg-bgPrimary flex flex-col font-medium gap-x-8 gap-y-2 px-8 py-8 rounded-sm text-textSecondary md:flex-row md:items-center">
        <Flex className="gap-x-2.5">
          <LocationIcon />
          <Link href="#map" title="Посмотреть на карте">{address}</Link>
        </Flex>
        <Flex className="gap-x-2.5">
          <OfficeHoursIcon />
          <span>{`${opening.days.start}-${opening.days.end} c ${opening.hours.start} до ${opening.hours.start}`}</span>
        </Flex>
        <Flex className="gap-x-2.5 grow font-semibold justify-start md:justify-end md:text-right text-lg">
          <PhoneIcon size="M" />
          <Link className="" href={`tel:${phone}`} title="Позвонить">{formatPhoneNumber(phone)}</Link>
        </Flex>
        <div className="absolute bg-bgSecondary -bottom-1/4 md:-bottom-1/2 font-light left-1/2 py-2 px-4 rounded-sm text-center text-textPrimary transform -translate-x-1/2 -translate-y-1/2 w-11/12" >
          <h4>Доступна услуга вывоза металлолома</h4>
        </div>
      </header>
      <main className="flex flex-col gap-y-16 px-3 md:px-8 py-16">
        <div>
          <h3 className="font-semibold mb-2 text-center text-lg">Цены приема лома металлов</h3>
          <Table<MetalRow> columns={columns} data={items} />
        </div>
        <div id="map">
          <Map coordinates={coordinates} />
        </div>
      </main>
      <footer className="bg-bgPrimary flex flex-col md:flex-row gap-y-1 justify-between px-8 py-3 rounded-sm text-textSecondary text-xs md:text-sm">
        <Flex className="gap-x-1">
          <LocationIcon color="var(--bg-secondary)" size="XS" />
          {address}
        </Flex>
        <Flex className="gap-x-1">
          <OfficeHoursIcon color="var(--bg-secondary)" size="XS" />
          <span>{`${opening.days.start}-${opening.days.end} c ${opening.hours.start} до ${opening.hours.start}`}</span>
        </Flex>
        <Flex className="gap-x-1">
          <PhoneIcon color="var(--bg-secondary)" size="XS" />
          <Link href={`tel:${phone}`} title="Позвонить">{formatPhoneNumber(phone)}</Link>
        </Flex>
      </footer>
    </div>
  );
}
