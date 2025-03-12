import type {FC} from 'react';
import React from 'react';
import Script from 'next/script';

/** Метрики. */
export const Metrics: FC = () => <Script src="./ya-metrics.js" strategy="afterInteractive" />;

Metrics.displayName = 'Metrics';
