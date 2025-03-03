### Roster Details<br />
Team Name: KorvuX<br />
Roster: Jerbaut, ohMiick, VaPoR, Wrimel, WurmsoN<br />
Global Rank: [269](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [163]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  600.2<br />
<br />
Final Rank Value (600.2) = Starting Rank Value (592.0) + Head To Head Adjustments (8.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.248[<sup>1</sup>](#table2)
- Bounty Collected: 0.144[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.098<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 592.0
- 400 + ( ( 0.098 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 592.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1789 | 2024-12-06 | ZOTIX          | L   | 0.634      | -            | -                | -                | -         |    -9.09 | Jerbaut, ohMiick, VaPoR, Wrimel, WurmsoN |
|            6 |     1863 | 2024-12-04 | C4PYBARAS      | W   | 0.620      | 0.310        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.61 | Jerbaut, ohMiick, VaPoR, Wrimel, WurmsoN |
|            5 |     1969 | 2024-12-02 | CBUMP TEAM     | W   | 0.607      | 0.310        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.65 | Jerbaut, ohMiick, VaPoR, Wrimel, WurmsoN |
|            4 |     2871 | 2024-11-10 | Infernal Void  | L   | 0.460      | -            | -                | -                | -         |    -7.24 | Jerbaut, ohMiick, VaPoR, Wrimel, wurmsoN |
|            3 |     2885 | 2024-11-10 | Wklemmt        | W   | 0.459      | 0.143        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     6.57 | Jerbaut, ohMiick, VaPoR, Wrimel, wurmsoN |
|            2 |     2920 | 2024-11-09 | Esport Factory | W   | 0.453      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.14 | Jerbaut, ohMiick, VaPoR, Wrimel, wurmsoN |
|            1 |     2941 | 2024-11-09 | TGM-Gonsenheim | W   | 0.452      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.60 | Jerbaut, ohMiick, VaPoR, Wrimel, wurmsoN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($316.80)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.694 | $350.00        | $242.81         |
| 2024-11-10 |      0.460 | $160.84        | $73.99          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
