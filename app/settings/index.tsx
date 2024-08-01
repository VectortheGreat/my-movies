import { Picker } from "@react-native-picker/picker"
import { useEffect, useState } from "react"
import { NativeModules, SafeAreaView, StyleSheet } from "react-native"
import { ThemedText } from "../../components/ThemedText"
import { ThemedView } from "../../components/ThemedView"
import { regions } from "../../utils/regions"

export default function SettingsScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [selectedRegion, setSelectedRegion] = useState("us")
  const locale = NativeModules.I18nManager.localeIdentifier || "en_US"
  useEffect(() => {
    setSelectedRegion(locale.split("_")[1].toLowerCase())
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Row>
        <>
          <ThemedText>Language</ThemedText>
          <Picker
            mode="dropdown"
            style={{ width: 150 }}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Türkçe" value="tr" />
          </Picker>
        </>
      </Row>
      <Row>
        <>
          <ThemedText>Region</ThemedText>
          <Picker
            style={{ width: 150 }}
            selectedValue={selectedRegion}
            onValueChange={(itemValue) => setSelectedRegion(itemValue)}
          >
            {regions.map((region) => (
              <Picker.Item
                key={region.iso_639_1}
                label={`${region.english_name}${region.name && " / " + region.name}`}
                value={region.iso_639_1}
              />
            ))}
          </Picker>
        </>
      </Row>
    </SafeAreaView>
  )
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <ThemedView
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {children}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10
  }
})
