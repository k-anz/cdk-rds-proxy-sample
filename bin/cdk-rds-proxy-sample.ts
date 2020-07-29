#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkRdsProxySampleStack } from '../lib/cdk-rds-proxy-sample-stack';

const app = new cdk.App();
new CdkRdsProxySampleStack(app, 'CdkRdsProxySampleStack');
