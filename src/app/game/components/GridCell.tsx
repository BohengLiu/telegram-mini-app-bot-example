import React from 'react';

interface Props {
  // 这里可以根据实际需要添加属性
  bgColor?: string;
}

const GridCell = ({ bgColor }: Props) => {
  // 这里可以根据实际需要添加状态和逻辑来表示不同的角色

  return (
    <div style={{
      width: '100%',
      height: '100%',
      // 根据角色设置不同的背景色
      backgroundColor: bgColor || 'transparent',
    }}>
      {/* 可以根据需要在这里添加内容 */}
    </div>
  );
};

export default GridCell;
