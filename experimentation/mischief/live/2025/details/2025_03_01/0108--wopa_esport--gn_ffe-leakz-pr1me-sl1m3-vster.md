### Roster Details<br />
Team Name: WOPA Esport<br />
Roster: Gnøffe, Leakz, PR1mE, sL1m3, Vster<br />
Global Rank: [108](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [77]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  781.0<br />
<br />
Final Rank Value (781.0) = Starting Rank Value (812.4) + Head To Head Adjustments (-31.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.064[<sup>2</sup>](#table1)

The average of these factors is 0.211<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 812.4
- 400 + ( ( 0.211 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 812.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     1049 | 2025-01-06 | BadGuys                | L   | 0.838      | -            | -                | -                | -         |   -18.55 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           28 |     1053 | 2025-01-05 | Wu-Tang Clan           | W   | 0.831      | 0.417        | 0.001 (0.000)    | 0.224 (0.077)    | 0 (0.000) |     7.52 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           27 |     1095 | 2024-12-29 | CS2NEWS                | L   | 0.785      | -            | -                | -                | -         |   -20.35 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           26 |     1135 | 2024-12-28 | EYEBALLERS             | L   | 0.778      | -            | -                | -                | -         |   -14.69 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           25 |     1180 | 2024-12-25 | KONO.ECF               | L   | 0.758      | -            | -                | -                | -         |   -10.04 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           24 |     1188 | 2024-12-24 | ENCE Academy           | W   | 0.752      | 0.333        | 0.009 (0.002)    | 0.545 (0.136)    | 0 (0.000) |     9.96 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           23 |     1192 | 2024-12-24 | ALASKA                 | L   | 0.751      | -            | -                | -                | -         |    -8.57 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           22 |     1202 | 2024-12-23 | ESC Gaming             | W   | 0.745      | 0.333        | -                | 0.192 (0.048)    | 0 (0.000) |     4.32 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           21 |     1204 | 2024-12-23 | Heimo Esports          | W   | 0.744      | 0.333        | 0.004 (0.001)    | 0.485 (0.120)    | 0 (0.000) |     8.10 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           20 |     1220 | 2024-12-22 | ADEPTS                 | W   | 0.739      | -            | -                | -                | 0 (0.000) |     3.63 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           19 |     1237 | 2024-12-22 | Astralis Talent        | W   | 0.738      | 0.333        | 0.002 (0.001)    | 0.404 (0.099)    | 0 (0.000) |     8.16 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           18 |     1264 | 2024-12-21 | ALASKA                 | W   | 0.732      | 0.333        | 0.030 (0.007)    | 0.634 (0.155)    | 0 (0.000) |    15.64 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           17 |     1285 | 2024-12-21 | KONO.ECF               | W   | 0.731      | 0.333        | 0.045 (0.011)    | 0.629 (0.153)    | 0 (0.000) |    13.32 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           16 |     1319 | 2024-12-20 | Heimo Esports          | L   | 0.725      | -            | -                | -                | -         |   -13.91 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           15 |     1357 | 2024-12-18 | Viperio                | W   | 0.712      | 0.333        | 0.002 (0.000)    | -                | 0 (0.000) |     5.95 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           14 |     1362 | 2024-12-18 | ESC Gaming             | L   | 0.711      | -            | -                | -                | -         |   -18.09 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           13 |     1522 | 2024-12-13 | LEON Esports           | L   | 0.680      | -            | -                | -                | -         |   -13.86 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           12 |     1599 | 2024-12-11 | XPERION NXT            | W   | 0.667      | -            | -                | -                | -         |     6.00 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           11 |     1870 | 2024-12-04 | LEON Esports           | L   | 0.620      | -            | -                | -                | -         |   -12.52 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           10 |     1973 | 2024-12-02 | Sashi Academy          | W   | 0.607      | -            | -                | -                | -         |     5.75 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            9 |     2041 | 2024-12-01 | Dragon Esports Club    | W   | 0.600      | 0.333        | 0.007 (0.001)    | 0.344 (0.069)    | -         |     6.14 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            8 |     2183 | 2024-11-29 | Betclic Apogee Esports | L   | 0.587      | -            | -                | -                | -         |    -8.43 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            7 |     2213 | 2024-11-28 | Team Genesium          | W   | 0.580      | 0.333        | 0.002 (0.000)    | -                | -         |     5.62 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            6 |     2282 | 2024-11-26 | Insilio                | W   | 0.567      | 0.354        | -                | 0.527 (0.106)    | -         |     4.32 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            5 |     2290 | 2024-11-26 | 9INE                   | W   | 0.566      | 0.354        | 0.011 (0.002)    | -                | -         |     7.01 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            4 |     2310 | 2024-11-25 | Natus Vincere Junior   | L   | 0.559      | -            | -                | -                | -         |    -5.22 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            3 |     2368 | 2024-11-23 | Astralis Talent        | W   | 0.547      | -            | -                | -                | 1 (0.547) |     6.65 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            2 |     2704 | 2024-11-15 | HOTU                   | L   | 0.491      | -            | -                | -                | -         |   -10.28 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            1 |     2775 | 2024-11-13 | HOTU                   | W   | 0.477      | 0.143        | -                | 0.700 (0.048)    | -         |     4.99 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,529.83)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-25 |      0.758 | $3,000.00      | $2,274.79       |
| 2024-12-24 |      0.751 | $3,000.00      | $2,252.50       |
| 2024-12-15 |      0.692 | $1,500.00      | $1,038.33       |
| 2024-11-23 |      0.547 | $9,080.87      | $4,964.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
