import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { classNames } from 'shared/lib/classNames/classNames';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo(({
    className,
    value,
    onChange,
    readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();
    const options = [
        {
            value: Currency.RUB,
            content: Currency.RUB,
        },
        {
            value: Currency.EUR,
            content: Currency.EUR,
        },
        {
            value: Currency.USD,
            content: Currency.USD,
        },
    ];
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Укажите валюту')}
            className={classNames('', {}, [className])}
            readonly={readonly}
            direction="top"
            label={t('Укажите валюту')}
        />
    );
});
