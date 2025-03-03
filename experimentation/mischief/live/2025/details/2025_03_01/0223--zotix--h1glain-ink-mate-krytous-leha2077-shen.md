### Roster Details<br />
Team Name: ZOTIX<br />
Roster: h1glaiN, ink-mate, kRyTouS, LEHA2077, shen<br />
Global Rank: [223](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [145]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  649.8<br />
<br />
Final Rank Value (649.8) = Starting Rank Value (632.9) + Head To Head Adjustments (16.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.119<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.9
- 400 + ( ( 0.119 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 632.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1570 | 2024-12-12 | 4z                  | L   | 0.673      | -            | -                | -                | -         |   -11.12 | h1glaiN, ink-mate, kRyTouS, LEHA2077, shen     |
|            7 |     1629 | 2024-12-10 | REDPack Esports     | W   | 0.660      | 0.310        | 0.001 (0.000)    | 0.069 (0.014)    | 0 (0.000) |     9.68 | h1glaiN, ink-mate, kRyTouS, LEHA2077, shen     |
|            6 |     1649 | 2024-12-09 | QMISTRY             | W   | 0.654      | 0.310        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.51 | Ganginho, h1glaiN, ink-mate, kRyTouS, LEHA2077 |
|            5 |     1789 | 2024-12-06 | KorvuX              | W   | 0.634      | 0.310        | 0.001 (0.000)    | 0.144 (0.028)    | 0 (0.000) |     9.09 | Ganginho, h1glaiN, ink-mate, kRyTouS, LEHA2077 |
|            4 |     1862 | 2024-12-04 | 8morts 6blesses     | W   | 0.620      | 0.310        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.07 | Ganginho, h1glaiN, ink-mate, kRyTouS, LEHA2077 |
|            3 |     1968 | 2024-12-02 | Impulse GW          | W   | 0.607      | 0.310        | 0.006 (0.001)    | 0.066 (0.013)    | 0 (0.000) |    11.41 | Ganginho, h1glaiN, ink-mate, kRyTouS, LEHA2077 |
|            2 |     3254 | 2024-11-01 | Natus Vincere Youth | L   | 0.399      | -            | -                | -                | -         |    -8.71 | Ganginho, h1glaiN, ink-mate, LEHA2077, shen    |
|            1 |     3335 | 2024-10-30 | Preasy Esport       | L   | 0.385      | -            | -                | -                | -         |    -4.05 | Ganginho, h1glaiN, ink-mate, LEHA2077, shen    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($485.63)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.694 | $700.00        | $485.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
