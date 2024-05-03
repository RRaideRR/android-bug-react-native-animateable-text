import { StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Image } from 'expo-image';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={'https://storage.googleapis.com/unlikeany-dev.appspot.com/test-9d52f8a6-51aa-4383-ac27-8bf3de1b9386/portrait_prompts/fc84e221-d86f-46be-b3bf-dec080867246.avif?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=firebase-adminsdk-z6ufh%40unlikeany-dev.iam.gserviceaccount.com%2F20240503%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240503T105103Z&X-Goog-Expires=604800&X-Goog-SignedHeaders=host&X-Goog-Signature=3deae3a87b5f4abfd61da5e00399eee2746eff3d6df133c0c1846e13ec0c8c21aeb036e8cf06faaf6dfaab77b42952e47e684f1ea7b2b59177fd0945fdf8acea0a8f92fe4f58badef005918faa0544bfe77c93470197ed46ef42969cdc056c81b75d8e4e4b660a6f4c3448824cadcc01fe2de266fd9ec5adc6b441993248937af83ec463ecfe6c08e65aef1d2eeeb521e4b845405ab965394ad6331fc13f459e443b1307b828323d782c3e0b29bd3e5d3e8ade07c7e9895cdd64e9c9255931380760ff5c2be81f2f82ae0ea2459d7d33a859f7dfec4321815b996a8667b7a8544bc11e008406672d9531e7f8914981954676e189ebed274b32d553772f13b7b1'}
          style={styles.reactLogo}
          onError={(e) => {
            console.log(e)
          }}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
