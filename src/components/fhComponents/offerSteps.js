import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import StepIcon from '@mui/material/StepIcon';
import { styled } from '@mui/material/styles';

const steps = [
  {
    label: '激活 NetID',
    description: `在 NYU Start 激活NetID，设置密码。NetID 形式类似 xy1234，是今后登陆NYU各个网上系统的用户名，在你的学习生活中会经常用到。`,
  },
  {
    label: '使用 NetID 登陆 NYUHome',
    description: '',
  },
  {
    label: '选择 Albert Login',
    description: ``,
  },
  {
    label: '选择 Applicants',
    description: ``,
  },
  {
    label: '选择 Applicant Status',
    description: ``,
  },
  {
    label: '选择 Admission Offer',
    description: ``,
  },
  {
    label: '点击 Accept',
    description: ``,
  },
  {
    label: '在截止日期前缴纳 Deposit',
    description: ``,
  },
];

const CustomStepIcon = styled(StepIcon)(({ theme }) => ({
  '& .MuiStepIcon-text': {
    fill: '#d3b4f8', // 数字颜色
  },
  '&.Mui-active': {
    color: '#d3b4f8', // active步骤图标颜色
  },
  '&.Mui-completed': {
    color: '#d3b4f8', // 完成步骤图标颜色
  },
}));

export default function OfferSteps() {
  return (
    <Box sx={{ maxWidth: 500, ml: 4 }}>
      <Stepper orientation="vertical" activeStep={steps.length}>
        {steps.map((step, index) => (
          <Step key={step.label} active>
            <StepLabel StepIconComponent={CustomStepIcon}>{step.label}</StepLabel>
            <StepContent>
              <Typography sx={{ ml: 2 }}>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
