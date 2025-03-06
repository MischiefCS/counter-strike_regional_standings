### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, headtr1ck, kensizor, npl<br />
Global Rank: [23](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [17]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  980.0<br />
<br />
Final Rank Value (980.0) = Starting Rank Value (960.4) + Head To Head Adjustments (19.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.559[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.109[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 960.4
- 400 + ( ( 0.242 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 960.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       82 | 2025-02-23 | BC.Game Esports    | W   | 0.538      | 0.435        | 0.061 (0.014)    | 1.000 (0.234)    | 0 (0.000) |     8.61 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           14 |      100 | 2025-02-23 | 9Pandas            | W   | 0.536      | 0.435        | 0.060 (0.014)    | 0.280 (0.065)    | 0 (0.000) |     5.32 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           13 |      114 | 2025-02-22 | CYBERSHOKE Esports | W   | 0.531      | 0.435        | 0.013 (0.003)    | 1.000 (0.231)    | 0 (0.000) |     5.19 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           12 |      155 | 2025-02-20 | Monte              | W   | 0.518      | 0.435        | 0.004 (0.001)    | 0.367 (0.083)    | 0 (0.000) |     3.88 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           11 |      247 | 2025-02-15 | 500                | L   | 0.483      | -            | -                | -                | -         |    -7.46 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           10 |      269 | 2025-02-14 | Nemiga Gaming      | W   | 0.478      | 0.435        | 0.011 (0.002)    | 0.243 (0.050)    | 0 (0.000) |     3.25 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            9 |      314 | 2025-02-12 | GUN5 Esports       | W   | 0.464      | 0.435        | 0.052 (0.010)    | 0.171 (0.035)    | 0 (0.000) |     4.32 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            8 |      505 | 2025-02-07 | PARIVISION         | L   | 0.429      | -            | -                | -                | -         |   -11.86 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            7 |      516 | 2025-02-06 | Alliance           | W   | 0.425      | 0.435        | 0.000 (0.000)    | 0.621 (0.115)    | 0 (0.000) |     1.35 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            6 |      552 | 2025-02-05 | PARIVISION         | W   | 0.417      | 0.143        | -                | 0.885 (0.053)    | 0 (0.000) |     1.54 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            5 |      566 | 2025-02-05 | Nemiga Gaming      | W   | 0.416      | 0.143        | 0.011 (0.001)    | -                | 0 (0.000) |     2.87 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            4 |      571 | 2025-02-04 | Fire Flux Esports  | W   | 0.412      | 0.435        | 0.001 (0.000)    | 0.784 (0.140)    | 0 (0.000) |     2.94 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            3 |      605 | 2025-02-02 | Sashi Esport       | W   | 0.396      | 0.435        | 0.001 (0.000)    | 0.507 (0.087)    | -         |     2.77 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            2 |      676 | 2025-01-17 | G2 Esports         | L   | 0.293      | -            | -                | -                | -         |    -1.92 | alex666, esenthial, headtr1ck, kensizor, npl     |
|            1 |      919 | 2024-12-12 | ECSTATIC           | L   | 0.049      | -            | -                | -                | -         |    -1.18 | alex666, cptkurtka023, esenthial, headtr1ck, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,265.19)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.538 | $22,000.00     | $11,839.26      |
| 2025-02-15 |      0.485 | $5,000.00      | $2,425.93       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
