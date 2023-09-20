import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo(({
    className,
    value,
    onChange,
    readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();
    const options = [
        {
            value: Country.Armenia,
            content: Country.Armenia,
        },
        {
            value: Country.Belarus,
            content: Country.Belarus,
        },
        {
            value: Country.Kazakhstan,
            content: Country.Kazakhstan,
        },
        {
            value: Country.Russia,
            content: Country.Russia,
        },
        {
            value: Country.Ukraine,
            content: Country.Ukraine,
        },
    ];
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Укажите страну')}
            className={classNames('', {}, [className])}
            readonly={readonly}
            direction="top"
            label={t('Укажите страну')}
        />
    );
});
